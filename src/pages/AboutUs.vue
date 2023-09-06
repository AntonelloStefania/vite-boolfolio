<script>
    export default {
        data() {
            return {
                imageSrc:"https://picsum.photos/600/200"
            }
        },
    }
</script>
<template >
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex">
                <div class="col-6">
                    <div class="col-12 my-3">
                        <h3 class="my-3">About Us</h3>
                        <p>Welcome to my web development world! I am a dedicated web developer with a strong passion for creating outstanding online experiences. My journey in the realm of web development started with a spark of curiosity, and it has since evolved into a full-fledged adventure.</p>
                    </div>
                </div>
                <div class="col-6 ms-5 text-end">
                    <img :src="`${imageSrc}`" alt="">
                </div>
            </div>
            <div class="col-12 d-flex my-3 ">
                <div class="col-6 me-5">
                    <img :src="`${imageSrc}`" alt="">
                </div>
                <div class="col-6">
                    <div class="col-12 my-3">
                        <h3 class="my-3">Why Web Development?</h3>
                        <p>I believe that the internet is not just a tool; it's a canvas for creativity and innovation. The ability to transform ideas into functional, visually captivating websites is what drives me each day. I am committed to harnessing the power of web technologies to bring unique visions to life.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex my-3 ">
                <div class="col-6">
                    <div class="col-12 my-3">
                        <h3 class="my-3">My Approach</h3>
                        <p>In my work, I prioritize clean and efficient code, ensuring that websites are not only visually appealing but also fast and accessible. User experience is at the forefront of my design philosophy, and I'm always striving to create intuitive and engaging interfaces.</p>
                    </div>
                </div>
                <div class="col-6 ms-5 text-end">
                    <img :src="`${imageSrc}`" alt="">
                </div>
            </div>
            <div class="col-12 d-flex my-3 ">
                <div class="col-6 me-5">
                    <img :src="`${imageSrc}`" alt="">
                </div>
                <div class="col-6">
                    <div class="col-12 my-3">
                        <h3 class="my-3">What Sets Me Apart</h3>
                        <p>One of the things that sets me apart is my commitment to continuous learning. The web development landscape is ever-evolving, and I stay up-to-date with the latest trends and technologies. This allows me to offer cutting-edge solutions that meet the demands of today's digital world.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 text-center my-5">
                <h3 class="my-3">Let's Collaborate</h3>
                <p>I'm always excited to collaborate with individuals, businesses, and organizations that share my passion for the web. Whether you have a specific project in mind or simply want to discuss the possibilities, feel free to reach out. I'm here to bring your web ideas to life.</p>
            </div>
        </div>
        
    </div>
</template>
<style lang="">
    
</style>