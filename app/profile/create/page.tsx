import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { UserPlus } from "lucide-react"; // Make sure to install lucide-react
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser()
  if (user?.privateMetadata.hasProfile) redirect("/")
  

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserPlus className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Create New Profile</h1>
          </div>
        </CardHeader>
        <CardContent>
          <FormContainer action={createProfileAction}>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                />
                <FormInput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                />
                <FormInput
                  name="userName"
                  label="Username"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <CardFooter className="px-0 pt-6">
              <SubmitButton text="Create Profile" size="lg" className="" />
            </CardFooter>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProfile;
