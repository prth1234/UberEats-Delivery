<script setup>
import { useRouter } from 'vue-router';
// import Navbar from './components/navbar.vue'; // Check the path and file extension
import Navbar from './Navbar.vue'
const router = useRouter();

const redirectToMain = () => {
  router.push('/main'); // Redirect to '/main' route
};
</script>