output "ec2_instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.app_server.id
}

output "ec2_public_ip" {
  description = "EC2 public IP"
  value       = aws_instance.app_server.public_ip
}

output "ec2_public_dns" {
  description = "EC2 public DNS"
  value       = aws_instance.app_server.public_dns
}

output "security_group_id" {
  description = "Application security group ID"
  value       = aws_security_group.app_sg.id
}

output "iam_role_name" {
  description = "EC2 IAM role"
  value       = aws_iam_role.ec2_ssm_role.name
}