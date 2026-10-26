# Compliment Generator API - Dart/Flutter Client

Compliment Generator creates unique, heartfelt compliments using template-based generation with extensive word banks. Perfect for apps, chatbots, or spreading positivity.

[![pub package](https://img.shields.io/pub/v/apiverve_compliments.svg)](https://pub.dev/packages/apiverve_compliments)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Compliment Generator API](https://apiverve.com/marketplace/compliments?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_compliments: ^1.2.3
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_compliments/apiverve_compliments.dart';

void main() async {
  final client = ComplimentsClient('YOUR_API_KEY');

  try {
    final response = await client.execute({
      'adult': 
    });

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "compliment": "Your graceful professionalism is an asset to everyone."
  }
}
```

## API Reference

- **API Home:** [Compliment Generator API](https://apiverve.com/marketplace/compliments?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/compliments](https://docs.apiverve.com/ref/compliments?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
