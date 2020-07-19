<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class LanguagesController extends AbstractController
{
    /**
     * @Route("/php-js", name="languages")
     */
    public function index()
    {
        return $this->render('languages/index.html.twig', [
            'php' => 'PHP',
            'js' => 'JS',
        ]);
    }
}
