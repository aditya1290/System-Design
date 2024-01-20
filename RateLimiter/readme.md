# RateLimiter
[https://medium.com/geekculture/system-design-design-a-rate-limiter-81d200c9d392](https://medium.com/geekculture/system-design-design-a-rate-limiter-81d200c9d392)

`
A Rate Limiter limits the number of client requests allowed to be sent over a specified period. If the API request count exceeds the threshold defined by the rate limiter, all the excess calls are blocked.
`

## Benefits

- A rate limiter prevents DoS attacks, intentional or unintentional, by blocking the excess calls.
- Reduces cost where the system is using a 3rd-party API service and is charged on a per-call-basis.
- To reduce server load, a rate limiter is used to filter out excess requests caused by bots or users’ misbehaviour.

## Where

- Client Side :  unreliable place to enforce rate limiting because client requests can easily be forged by malicious actors.
- Server Side 
- Middleware


Cloud Microservices have been quite popular and rate limiting is implemented within the API Gateway. 



# Types of Rate Limiters

1) [Token Based Rate Limiter](./TokenBased/readme.md)
