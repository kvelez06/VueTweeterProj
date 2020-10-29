import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue";
import FeedPage from "../views/Feed.vue";
import AccountPage from "../views/Account.vue";
import UserTweets from "../components/UserTweets.vue";
import UserProfile from "../components/UserProfile.vue";
import ProfilesPage from "../views/Profiles.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/feed",
    name: "feed-page",
    component: FeedPage
  },
  {
    path: "/account",
    name: "account-page",
    component: AccountPage
  },
  {
    path: "/",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/tweets",
    name: "user-tweets",
    component: UserTweets
  },
  {
    path: "/profile",
    name: "user-profile",
    component: UserProfile
  },
  {
    path: "/profiles",
    name: "profiles-page",
    component: ProfilesPage
  }
];


const router = new VueRouter({
  routes
});

export default router;
