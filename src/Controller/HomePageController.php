<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index(TranslatorInterface $translator)
    {
        $translated = $translator->trans('Symfony is great');

        return $this->render('home_page/index.html.twig', [
            'controller_name' => 'HomePageController',
            'message' => $translated,
        ]);
    }
}
