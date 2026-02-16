/// Response models for the Compliment Generator API.

/// API Response wrapper.
class ComplimentsResponse {
  final String status;
  final dynamic error;
  final ComplimentsData? data;

  ComplimentsResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory ComplimentsResponse.fromJson(Map<String, dynamic> json) => ComplimentsResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? ComplimentsData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the Compliment Generator API.

class ComplimentsData {
  String? compliment;

  ComplimentsData({
    this.compliment,
  });

  factory ComplimentsData.fromJson(Map<String, dynamic> json) => ComplimentsData(
      compliment: json['compliment'],
    );
}

class ComplimentsRequest {
  bool? adult;

  ComplimentsRequest({
    this.adult,
  });

  Map<String, dynamic> toJson() => {
      if (adult != null) 'adult': adult,
    };
}
