"use client";

import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main className="m-5">
      <header>
        <h1 className="text-3xl text-center">Shopping List App</h1>
      </header>
      {user ? (
        <div>
          <p>Signed in as ({user.email}).</p>
          <img src={user.photoURL} className="w-10 h-10" />
          <Link href="/week-9/shopping-list">
            Continue to your Shopping List
          </Link>
          <div>
            <button
              type="button"
              className="text-lg bg-red-600 text-white rounded px-2 py-1 mt-4"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="text-lg bg-green-600 text-white rounded px-2 py-1 mt-4"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
