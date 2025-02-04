"use client";
import Heading from "@/components/heading";
import Themes from "@/components/themes";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage your account"
        icon={Settings}
        iconColor="text-gray-700 dark:text-white"
        bgColor="bg-gray-700/10 dark:bg-white/10 "
      />
      <div className="w-full  flex flex-col justify-center gap-3">
        <div className="flex gap-4 items-center ml-6">
          <h1 className="font-bold">Theme Preferences : </h1>
          <Themes />
        </div>

        <div className="flex gap-4 items-center ml-6">
          <h1 className="font-bold">Account : </h1>
          <div className="flex gap-4">
            <Link href={"/user-profile"}>
              <Button
                variant={"outline"}
                className="rounded-lg dark:border-white"
              >
                Manage Account
              </Button>
            </Link>
            <SignOutButton>
              <Button
                variant={"destructive"}
                className="rounded-lg dark:border-white"
              >
                Logout
              </Button>
            </SignOutButton>
          </div>
        </div>
      </div>

      {/* <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are a curious PRO user"
            : "You are not a curious PRO user"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div> */}
    </div>
  );
}
