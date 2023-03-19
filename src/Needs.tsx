import "./Needs.css";
import { useState } from "react"
export default function Needs(): JSX.Element {
    interface FormData {
        height: number,
        weight: number,
        sex: string,
        age: number
    }
    const [formData, setFormData] = useState<FormData>({
        height: 0,
        weight: 0,
        sex: "",
        age: 0
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function calculateBMI(height: number, weight: number): number {
        return weight / Math.pow(height, 2) * 703
    }
    function calculateIBW(sex: string, height: number) {
        if (sex === "male") {
            return (106 + (6 * (height - 60)))
        }
        else if (sex === "female") {
            return (100 + (6 * (height - 60)))
        }
    }

    let BMI = calculateBMI(formData.height, formData.weight);
    let IBW = calculateIBW(formData.sex, formData.height);


    return (
        <div className="needs">
            <div className="calculator">
                <input name ="weight" placeholder="Weight in lbs" value={formData.weight} onChange={handleChange} />
                <input name ="height" placeholder="Height in In." value={formData.height} onChange={handleChange}/>
                <input name ="sex" placeholder="Sex" value={formData.sex} onChange={handleChange}/>
                <input name ="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
            </div>
        </div>
    );
}