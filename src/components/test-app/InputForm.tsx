"use client"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import SelectBox from "./SelectBox"
import React from "react"
import { PasswordInput } from "./password-input"
import { useFaviconBadge } from "@/hooks/useFaviconBadge"
import { usePageVisibility } from "@/hooks/usePageVIsibility"

export default function InputForm() {
  const [textState, setTextState] = useState("")
  const [count, setCount] = useState(0)
  const MemorizedSelectBox = React.memo(SelectBox)

  useFaviconBadge(count)
  const pageVisibility = usePageVisibility()

  useEffect(() => {
    setTimeout(() => {
      console.count("timeout")
      setCount(1)
    }, 5000)
  }, [])

  useEffect(() => {
    if (pageVisibility) setCount(0)
  }, [pageVisibility])

  return (
    <>
      <Input
        className="text-green-500 font-bold text-xl"
        value={textState}
        onChange={(e) => {
          setTextState(e.target.value)
        }}
      />
      <MemorizedSelectBox></MemorizedSelectBox>
      <PasswordInput></PasswordInput>
      <Button onClick={() => setCount(count + 1)}>Test</Button>
      <Button onClick={() => setCount(0)}>Test</Button>
    </>
  )
}
