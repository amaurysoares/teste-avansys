<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }"> Home </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'dashboard' }"> Dashboard </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'login' }"> Login </router-link>
    </li>
    <li>
      <a href="#"> Signout </a>
    </li>
  </ul>
</template>