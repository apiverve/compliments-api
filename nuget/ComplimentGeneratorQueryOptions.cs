using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ComplimentGenerator
{
    /// <summary>
    /// Query options for the Compliment Generator API
    /// </summary>
    public class ComplimentGeneratorQueryOptions
    {
        /// <summary>
        /// Include flirty/romantic compliments
        /// Example: false
        /// </summary>
        [JsonProperty("adult")]
        public string Adult { get; set; }
    }
}
