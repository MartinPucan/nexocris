<?php
declare(strict_types=1);

namespace App\Twig;

use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    private RequestStack $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('assetPath', [$this, 'assetPath'])
        ];
    }

    public function assetPath(string $assetPath): string
    {
        return $this->getAssetPath($assetPath);
    }

    private function getAssetPath(string $assetPath): string
    {
        $request = $this->requestStack->getCurrentRequest();
        $baseUrl = $request !== null ? $request->getBaseUrl() : '';

        return "{$baseUrl}/public/{$assetPath}";
    }

}