import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";

interface User {
  email: string;
  password: string;
  username: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, username }: User = req.body;

  try {
    const exists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (exists) {
      res.status(400).send("User already exists");
    } else {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: await hash(password, 10),
        },
      });
      res.status(200).json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}
