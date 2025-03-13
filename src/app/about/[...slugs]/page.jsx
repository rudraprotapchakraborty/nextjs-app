import React from 'react'

export default async function AboutSlugPages({params}) {
    const p = await params;
    console.log(p)
  return (
    <div>
      <h1>About Slug Pages</h1>
    </div>
  )
}
