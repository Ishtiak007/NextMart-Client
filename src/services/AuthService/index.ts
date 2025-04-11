/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { FieldValues } from "react-hook-form";

// registerUser
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// loginUser
export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
