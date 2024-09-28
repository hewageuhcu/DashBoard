<template>
    <div class="w-screen h-screen flex">
        <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
           <div class="h-[50px] bg-gray-900 flex justify-start items-center">
<div class="px-[20px]">
            <h3 class="font-bold text-xl">Admin Dashboard</h3>
        </div>   
        </div>
           <div class="h-[calc(100vh-50px)] bg-gray-700">
           <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
            <br/>
           
            <router-link to="MyHome" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M9 21V9h6v12" />
</svg>
<a href="../MyHome.vue">
  HOME
</a>

</router-link>
<br/>

<router-link 
  to="/MyProfile" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
  <a href="../MyProfile.vue">
    PROFILE
  </a>

</router-link>

<br/>

<router-link 
  to="/MySettings" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75A2.25 2.25 0 1012 14.25 2.25 2.25 0 0012 9.75zM19.5 12a7.5 7.5 0 01-.293 2.209l1.543 1.198a.75.75 0 01.165 1.05l-1.5 2.598a.75.75 0 01-1.05.165l-1.543-1.198a7.517 7.517 0 01-2.209.293 7.517 7.517 0 01-2.209-.293l-1.543 1.198a.75.75 0 01-1.05-.165l-1.5-2.598a.75.75 0 01.165-1.05l1.543-1.198A7.5 7.5 0 014.5 12a7.5 7.5 0 01.293-2.209L3.25 8.593a.75.75 0 01-.165-1.05l1.5-2.598a.75.75 0 011.05-.165l1.543 1.198A7.517 7.517 0 0112 4.5a7.517 7.517 0 012.209.293l1.543-1.198a.75.75 0 011.05.165l1.5 2.598a.75.75 0 01-.165 1.05l-1.543 1.198A7.5 7.5 0 0119.5 12z"/>
</svg>
<a href="../MySettings.vue">
  SETTINGS
</a>

</router-link>
<br/>
<router-link 
  to="/MyDownload" 
  class="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v2.5A1.5 1.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V16m-6-8v10m0 0l-4-4m4 4l4-4" />
</svg>

<a href="../MyDownload.vue">
  DOWNLOAD
</a>

</router-link>



           </div>
           </div> 
        </div>   
      
        <div class="w-full h-full bg-gray-400">
          <div class="h-[50px] bg-gray-200 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
  <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96z"></path>
    </svg>
  </div>
  <div class="w-[calc(100%-200px)] flex justify-center">
    <form class="w-[calc(100%-200px)] flex justify-center">
      <form class="flex items-center w-[500px]">
  <label for="voice-search" class="sr-only">Search</label>
  
  <div class="relative w-full">

    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.817-4.817A6 6 0 012 8z" clip-rule="evenodd"></path>
      </svg>
    </div>
     
    
    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
    
   <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
      <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0 5 5 0 01-5 5 1 1 0 102 0z" clip-rule="evenodd"></path>
      </svg>  
    </router-link>
  </div> 
</form>
<div class="w-[200px] fixed top-1 right-4">
  <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
 
    <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://thumbs.dreamstime.com/z/letter-se-logotype-design-company-name-colorful-swoosh-vector-logo-business-identity-204246122.jpg">
    
    
    <div class="font-semibold dark:text-black text-left">
      <div>Chathurya, SE</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
    </div>
  </div>
  <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
  <div class="py-1 text-left" role="none">
  
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account Settings</a>
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">New Orders</a>
    
 
    <form method="POST" action="#" role="none">
      <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign Out</button>
    </form>
  </div>
</div>

</div>



    </form>
  </div>
</div>

           <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">

<div class="border border-gray-300 rounded-md p-[20px] h-full">
  <router-view>

  </router-view>
</div>
           </div>
        </div>
    </div>
    </template>
    
    <script>
    export default{
      data(){
return {
  showDropDown:false,
  showSide:true
}
      },
      methods:{
        toggleSideBar(){
          this.showSide=!this.showSide

},
toggleDrop(){
this.showDropDown=!this.showDropDown
}
      }
    
    
    }
    </script>
    
    <style>
    
    </style>