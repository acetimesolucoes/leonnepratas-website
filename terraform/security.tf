resource "aws_security_group" "leonnepratas_sg" {
  name        = "leonnepratas_sg"
  description = "leonnepratas security group"
  vpc_id      = aws_vpc.leonnepratas_vpc.id
}

resource "aws_security_group_rule" "leonnepratas_sgr_pub_out" {
  from_port         = 0
  protocol          = "-1"
  security_group_id = aws_security_group.leonnepratas_sg.id
  to_port           = 0
  type              = "egress"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "leonnepratas_sgr_ssh_in" {
  from_port         = 22
  protocol          = "tcp"
  security_group_id = aws_security_group.leonnepratas_sg.id
  to_port           = 22
  type              = "ingress"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "leonnepratas_sgr_https_in" {
  from_port         = 443
  protocol          = "tcp"
  security_group_id = aws_security_group.leonnepratas_sg.id
  to_port           = 443
  type              = "ingress"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "leonnepratas_sgr_http_in" {
  from_port         = 80
  protocol          = "tcp"
  security_group_id = aws_security_group.leonnepratas_sg.id
  to_port           = 80
  type              = "ingress"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_key_pair" "leonnepratas_key" {
  key_name   = "leonnepratas_key"
  public_key = file("~/.ssh/leonnepratas_key.pub")
}

