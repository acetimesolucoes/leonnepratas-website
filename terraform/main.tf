resource "aws_vpc" "leonnepratas_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "leonnepratas_vpc_1"
  }
}

resource "aws_subnet" "leonnepratas_subnet_1" {
  vpc_id                  = aws_vpc.leonnepratas_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true

  tags = {
    Name = "leonnepratas_subnet_pub"
  }
}

resource "aws_internet_gateway" "leonnepratas_igw" {
  vpc_id = aws_vpc.leonnepratas_vpc.id

  tags = {
    Name = "leonnepratas_igw"
  }
}

resource "aws_route_table" "leonnepratas_rtb" {
  vpc_id = aws_vpc.leonnepratas_vpc.id

  tags = {
    Name = "leonnepratas_rtb"
  }
}

resource "aws_route" "leonnepratas_route" {
  route_table_id         = aws_route_table.leonnepratas_rtb.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.leonnepratas_igw.id
}

resource "aws_route_table_association" "leonnepratas_rta" {
  route_table_id = aws_route_table.leonnepratas_rtb.id
  subnet_id      = aws_subnet.leonnepratas_subnet_1.id
}

resource "aws_instance" "leonnepratas_ec2" {
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.leonnepratas_key.id
  vpc_security_group_ids = [aws_security_group.leonnepratas_sg.id]
  subnet_id              = aws_subnet.leonnepratas_subnet_1.id

  ami = data.aws_ami.leonnepratas_ami.id

  user_data = file("userdata.tpl")

  root_block_device {
    volume_size = 8
  }

  tags = {
    Name = "leonnepratas_ec2"
  }
}
