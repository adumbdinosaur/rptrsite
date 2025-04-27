resource "null_resource" "invalidate_cache" {
  depends_on = [aws_s3_object.website_files]

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.website_distribution.id} --paths '/*'"
  }
}

resource "aws_cloudfront_distribution" "website_distribution" {
  depends_on = [aws_acm_certificate.ssl_certificate]
  origin {
    domain_name = aws_s3_bucket_website_configuration.static_website_config.website_endpoint
    origin_id   = "S3-${aws_s3_bucket.static_website.bucket}"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = ["${var.domain}", "www.${var.domain}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.static_website.bucket}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
      headers = ["Origin", "Access-Control-Request-Headers", "Access-Control-Request-Method"]
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.ssl_certificate.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}
