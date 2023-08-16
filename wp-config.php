<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'koukaki' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qFk&m5Q+gdq1LWL{;-7^16U:Gwz%A$hv>az5f&{_&b&>rsyJt9<TQ%^6pO{|nBi^' );
define( 'SECURE_AUTH_KEY',  'gnBaf.z]LHP;(2Z/`j{?3{wG^omgt;kT#<.nwq2*{V318I2W)mG,mx;IWQtm#1:g' );
define( 'LOGGED_IN_KEY',    'MUtcnhnqukDD_QH)6RuW#K57&-@)mq~`WT`nVM.!NbTqW&siw+YNQ&GSOnEc%#s ' );
define( 'NONCE_KEY',        'T3}l>wkM|6S9?x#$V<07S+1;Wu.Zur5%@%pEbj/guZ;4sb!knIQhry1~U;br4kX ' );
define( 'AUTH_SALT',        'z@}83RbAisL=>w;BnGi!P_K#MxrLiq7S97vW;N[[Jo()Ih-x(~%v0A#pvnB>U [@' );
define( 'SECURE_AUTH_SALT', 'V9v>8ha/#VdvXe9f>tbyHY3zlX.Ua}ve:Z/~CAA{}|-`(hoFYIF(erY{UPYv3[4y' );
define( 'LOGGED_IN_SALT',   'A&bJ#G7#l!FzFAM_F-f0a&018h|10&YR_nizph4uNH8JeGSCHa!r/N2%-K}(#/CZ' );
define( 'NONCE_SALT',       'h_cqmFZ;^b8}I^7y<s]7vj=jUD5BJYZ=]@8datY5 lL~gNh%e4!0I5<L[5#g+sZ}' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
