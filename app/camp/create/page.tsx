import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Buttons";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import Maps from "@/components/map";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { UserPlus } from "lucide-react"; // Make sure to install lucide-react


const CreateCamp = async () => {
  

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <UserPlus className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Create Landmark</h1>
          </div>
        </CardHeader>
        <CardContent>
          <FormContainer action={createLandmarkAction}>
            <div className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <FormInput
                  name="name"
                  label="Landmark Name"
                  type="text"
                  placeholder="Landmark Name"
                />
                <CategoryInput />
              </div>

                <TextAreaInput name="description" />                
            
              <div className="grid md:grid-cols-2 gap-4">
                <FormInput
                  name="price"
                  label="Price"
                  type="number"
                  placeholder="Price"
                />
                <ProvinceInput />
              </div>

              <ImageInput />

              <Maps />

            </div>
            <CardFooter className="px-0 pt-6">
              <SubmitButton text="Create Landmark" size="lg" className="" />
            </CardFooter>
          </FormContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCamp;
