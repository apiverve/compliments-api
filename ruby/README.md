# Compliment Generator API - Ruby Gem

Compliment Generator creates unique, heartfelt compliments using template-based generation with extensive word banks. Perfect for apps, chatbots, or spreading positivity.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_compliments'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_compliments
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_compliments'

# Initialize the client
client = APIVerve::Compliments::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ adult:  })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ adult:  })
  puts response["data"]
rescue APIVerve::Compliments::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Compliments::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Compliments::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/compliments?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/compliments?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/compliments?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
