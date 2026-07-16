# Compliment Generator API - PHP Package

Compliment Generator creates unique, heartfelt compliments using template-based generation with extensive word banks. Perfect for apps, chatbots, or spreading positivity.

## Installation

Install via Composer:

```bash
composer require apiverve/compliments
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Compliments\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['adult' => ]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Compliments\Client;
use APIVerve\Compliments\Exceptions\APIException;
use APIVerve\Compliments\Exceptions\ValidationException;

try {
    $response = $client->execute(['adult' => ]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "compliment": "Your graceful professionalism is an asset to everyone."
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/compliments?utm_source=packagist&utm_medium=readme).

## Support

- Website: [https://apiverve.com/marketplace/compliments?utm_source=php&utm_medium=readme](https://apiverve.com/marketplace/compliments?utm_source=php&utm_medium=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
