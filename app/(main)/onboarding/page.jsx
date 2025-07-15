import { industries } from "@/data/industries";

const OnbordingPage = () => {
  // Check if user is already onboarded
  return (
    <main>
      <OnbordingForm industries = {industries}/>
    </main>
  );
};

export default OnbordingPage;
