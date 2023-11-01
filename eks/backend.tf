terraform {
  backend "s3" {
    bucket = "ed-eos-terraform-state0310"
    key = "eos/eks/terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "eos_table"
  }
}