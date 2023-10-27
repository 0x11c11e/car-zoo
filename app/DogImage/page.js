// Import necessary libraries
import Image from "next/image"

// Define your data fetching function
async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

// Define your component
export default async function Page() {
  const data = await getData()
  return (
    <main>
      <h1>Random Affenpinscher Image</h1>
      <Image
        src={data.message}
        alt="Random Affenpinscher"
        width={500}
        height={500}
      />
    </main>
  )
}
