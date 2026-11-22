terraform {
  backend "s3" {
    bucket       = "remote-state-88s-dev"
    key          = "angular-node-aws-cicd/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
  }
}