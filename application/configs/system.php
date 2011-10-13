<?php
/**
 * Kebab Project
 *
 * LICENSE
 *
 * This source file is subject to the  Dual Licensing Model that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.kebab-project.com/cms/licensing
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to info@lab2023.com so we can send you a copy immediately.
 *
 * @category   Kebab
 * @package    System
 * @subpackage Bootstrap
 * @author	   lab2023 Dev Team
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/cms/licensing
 * @version    1.5.0
 */

/**
 * System Bootstrapping Configurations File
 *
 * @category   Kebab
 * @package    System
 * @subpackage Bootstrap
 * @author	   lab2023 Dev Team
 * @copyright  Copyright (c) 2010-2011 lab2023 - internet technologies TURKEY Inc. (http://www.lab2023.com)
 * @license    http://www.kebab-project.com/cms/licensing
 * @version    1.5.0
 */

/*
 * Set Script Executing Start Time
 */
defined('SCRIPT_START_TIME')   || define('SCRIPT_START_TIME', microtime(true));

/*
 * Application Environments
 */
$envs = array(
    'prod'  => 'production',    // Production environment
    'stage' => 'staging',       // Staging environment
    'test'  => 'testing',       // Testing environment
    'dev'   => 'development',   // Development environment
);
$env = $envs['dev'];


/*
 * Application Folders & Paths
 */
$paths = array(
    'app'   => 'application',   // application folder name
    'mod'   => 'modules',       // modules folder name
    'lib'   => 'library',       // libraries folder name
    'dev'   => 'developer',     // developer folder name
    'web'   => 'web'            // public folder name
);

/*
 * Application Configs
 */
$cfgs = array(
    'application'   => 'application.ini',   // Zend Framework application settings
    'kebab'         => 'kebab.ini',         // Kebab Project global settings
    'database'      => 'database.ini',      // Application DB settings
    'routes'        => 'routes.ini',        // Application routing settings
    'plugins'       => 'plugins.ini',       // Application plugins settings
    'languages'     => 'languages.ini',     // Languages settings
    'project'       => 'project.ini'        // Custom project settings
);

/*
 * Dynamic BaseUrl and HTTPS detector
 * 
 * If don't use vhost, you modify $baseUrl variable value like this:
 * $baseUrl = "http" . $ssl . "://" . @$_SERVER['HTTP_HOST'] . '/path_to_kebab/web';
 */
$ssl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "s" : null;
$baseUrl = "http" . $ssl . "://" . @$_SERVER['HTTP_HOST'];