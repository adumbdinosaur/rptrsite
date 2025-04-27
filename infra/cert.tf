resource "aws_acm_certificate" "ssl_certificate" {
  domain_name               = var.domain
  subject_alternative_names = ["www.${var.domain}"]
  validation_method         = "DNS"

  # Important: ACM certificates for CloudFront must be in us-east-1 region
  provider = aws.us-east-1
}

output "certificate_validation_details" {
  value = {
    for dvo in aws_acm_certificate.ssl_certificate.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      value = dvo.resource_record_value
      type  = dvo.resource_record_type
    }
  }
}
