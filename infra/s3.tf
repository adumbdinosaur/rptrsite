resource "null_resource" "build" {
  triggers = {
    build = timestamp()
  }

  provisioner "local-exec" {
    command     = "yarn build"
    working_dir = "../src"
  }
}

resource "aws_s3_bucket" "static_website" {
  bucket = var.domain
}

resource "aws_s3_bucket_website_configuration" "static_website_config" {
  bucket = aws_s3_bucket.static_website.bucket

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "static_website_access" {
  bucket = aws_s3_bucket.static_website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "static_website_policy" {
  bucket = aws_s3_bucket.static_website.id
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.static_website.arn}/*"
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.static_website_access]
}

resource "aws_s3_object" "website_files" {
  depends_on = [null_resource.build]
  for_each   = fileset("../dist", "**")

  bucket       = aws_s3_bucket.static_website.bucket
  key          = each.value
  source       = "../dist/${each.value}"
  content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5("../dist/${each.value}")
}


locals {
  mime_types = {
    ".html" = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".json" = "application/json"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".xml"  = "application/xml"
    ".svg"  = "image/svg+xml"
  }
}

