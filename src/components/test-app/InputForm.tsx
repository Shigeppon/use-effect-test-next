"use client"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import SelectBox from "./SelectBox"
import React from "react"
import { PasswordInput } from "./password-input"

export default function InputForm() {
  const [textState, setTextState] = useState("")
  useEffect(() => {
    console.count("副作用")
  })
  console.count("状態変化")

  const MemorizedSelectBox = React.memo(SelectBox)
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
      <Button>Test</Button>
    </>
  )
}
