<?php

get_header();
?>

    <main id="primary" class="site-main">
        
        <section class="banner">
            <video class="video" autoplay muted loop poster="<?php echo get_theme_file_uri() . '/assets/images/banner.png'; ?>">
                <source src=<?php echo get_theme_file_uri() . '/assets/images/Video.mp4'; ?> type="video/mp4">
            </video>
                <img class="logo" src="<?php echo get_theme_file_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants">
        </section>
        

        
        <section id="#story" class=" story">
    
            <h2>L'histoire</h2>
            <article class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
           
        <!--carousel-->
       
                <?php get_template_part('template-parts/carouselOfCharacters'); ?>
   

            <article id="place">
                <div class="containerCloud">
                <h3>Le lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                    <img  class="cloud bigCloud" src="<?php echo get_theme_file_uri() . '/assets/images/cloud/big_cloud.png'; ?>" alt="grandNuage">
                    <img  class="cloud littleCloud" src="<?php echo get_theme_file_uri() . '/assets/images/cloud/little_cloud.png'; ?>" alt="petitNuage">
                </div>

            </article>
        </section>


        <section id="studio" >
           <h2 class="visible" >Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

            <?php get_template_part('template-parts/eventOscars'); ?>
   
        
    </main><!-- #main -->

<?php
get_footer();
