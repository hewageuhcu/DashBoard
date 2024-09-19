<template>
    <div class="w-screen h-screen flex">
        <div class="w-[400px] h-full bg-gray-200 text-white">
           <div class="h-[50px] bg-gray-900 flex justify-start items-center">
<div class="px-[20px]">
            <h3 class="font-bold text-xl">Admin Dashboard</h3>
        </div>   
        </div>
           <div class="h-[calc(100vh-50px)] bg-gray-800">
           <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
            <br/>
           
            <router-link 
  to="/home" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12" />
</svg>

  HOME
</router-link>
<br/>

<router-link 
  to="/home" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
</svg>

PROFILE
</router-link>
<br/>

<router-link 
  to="/home" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75A2.25 2.25 0 1012 14.25 2.25 2.25 0 0012 9.75zM19.5 12a7.5 7.5 0 01-.293 2.209l1.543 1.198a.75.75 0 01.165 1.05l-1.5 2.598a.75.75 0 01-1.05.165l-1.543-1.198a7.517 7.517 0 01-2.209.293 7.517 7.517 0 01-2.209-.293l-1.543 1.198a.75.75 0 01-1.05-.165l-1.5-2.598a.75.75 0 01.165-1.05l1.543-1.198A7.5 7.5 0 014.5 12a7.5 7.5 0 01.293-2.209L3.25 8.593a.75.75 0 01-.165-1.05l1.5-2.598a.75.75 0 011.05-.165l1.543 1.198A7.517 7.517 0 0112 4.5a7.517 7.517 0 012.209.293l1.543-1.198a.75.75 0 011.05.165l1.5 2.598a.75.75 0 01-.165 1.05l-1.543 1.198A7.5 7.5 0 0119.5 12z"/>
</svg>

SETTINGS
</router-link>
<br/>
<router-link 
  to="/home" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2.5A1.5 1.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V16m-6-8v10m0 0l-4-4m4 4l4-4" />
</svg>


DOWNLOAD
</router-link>

<div>
    <div class="h-[50px]">
        <div>
            <router-link 
  to="/home" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM12 12v.01" />
</svg>

 HELP
</router-link>
        </div>
    </div>
</div>

           </div>
           </div>
        </div>
      
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-900">
Header Sidebar
           </div>
           <div class="h-[calc(100vh-50px)] bg-white">

           </div>
        </div>
    </div>
    </template>
    
    <script>
    export default{
    
    }
    </script>
    
    <style>
    
    </style>