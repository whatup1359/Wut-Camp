import { Input } from "../ui/input"
import { Label } from "../ui/label"


const ImageInput = () => {
    const name = "image"
    return (
        <div className="flex flex-col gap-y-2">

            <Label className="capitalize">
                {name}
            </Label>

            <Input 
            id={name}
            name={name}
            type="file"
            required
            accept="image/*"
            />

        </div>
    )
}


export default ImageInput