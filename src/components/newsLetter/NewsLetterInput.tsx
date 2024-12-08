import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

type Props = {
  onSubmit: (email: string) => void
}

export const NewsLetterInput = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-[700px] rounded-[52px] mx-4 md:mx-0 bg-[#F7F8F6] flex items-center p-3"
    >
      <Input
        name="email"
        type="email"
        placeholder="Email"
        className="border-0  shadow-none text-black py-6 px-6 placeholder:text-[18px]"
        required
        value={value}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="rounded-full bg-[#12182B] text-white hover:bg-[#12182B]/90 px-8 h-14"
      >
        Sign up
      </Button>
    </form>
  )
}
