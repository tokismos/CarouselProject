import { NewsLetterInput } from "./NewsLetterInput"

export const NewsLetter = () => {
  const handleSubscribe = (email: string) => {
    console.log("Subscribed", email)
  }

  return (
    <div className="bg-[#69A2FF] py-12 text-[#F7F8F6]">
      <div className="md:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-2xl min-w-[256px]  mx-5 md:mx-0 md:w-[480px] text-center md:text-left">
          Join the Cozey Family to stay ahead on product launches and exclusive
          content.
        </p>
        <NewsLetterInput onSubmit={handleSubscribe} />
      </div>
    </div>
  )
}
