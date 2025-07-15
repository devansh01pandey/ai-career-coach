import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnbordingForm from "./_components/onboarding-form";

const OnbordingPage = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if(isOnboarded) {
    redirect("/")
  }

  return (
    <main>
      <OnbordingForm industries = {industries}/>
    </main>
  );
};

export default OnbordingPage;
