## Learning Goals

* Understand the basic concepts of Big-O Notation
* Understand why we analyze algorithms in terms of asymptotic and
  worst-case performance
* Understand why we care about the algorithmic complexity of our
  programs on a practical level
* Explore the performance characteristics of some common ruby operations


### Big-O Notation -- What is it?

* Practice of analyzing an algorithm's performance.
* We represent the complexity of our algorithms using the symbol N.
* We always assume the worst case scenario.


### Big-O Notation -- real-world example

Consider the example of Pierre, a voracious Cinemaphile and Amazon Prime
subscriber. Pierre can access some of the films he wants to view by
downloading them in digital format, but some of them he has to have
shipped from Amazon's warehouse.

He can only download 1 film at a time, but he can order as many as he
wants for delivery. However downloading a film takes 2 hours, while
delivery takes 2 days.

How long does it take Pierre to receive 2 films a piece by each delivery
method?

```
2 films * 2hrs/film download time = 4 hours
2 films * 2 days delivery time = 2 days
```


Obviously, the download method is faster -- if Pierre's films are
available online.

But what if Pierre is trying to watch a lot of movies? Say, 10,000
movies.

```
10000 films * 2hrs/film download time = 20k hours (833 days)
10000 films * 2 days delivery time = 2 days
```

As we can see, once the number of films (`n`) grows above a
certain threshold, delivery overtakes downloading as the most efficient
method of film access.


### Visualizing Algorithmic Performance:

Can we find a way to describe, mathematically, what is happening in the
example above? What would it look like if we plotted these
time-relationships on a simple graph?

* Constant time (delivery) vs. Linear time (download)


### Assume the worst case scenario

As humans, we might be more likely to deal with 10 films rather than
10000 films. But it turns out that when working with computers we often
_do_ want to deal with the larger number.

* How can we analyze an algorithm in terms of its "order of growth"?
* Initial times can be misleading (delivery vs. download) when compared
  with growth rates


### Exercise -- An example in Ruby

We can find plenty of examples of data structures and algorithms
we use as programmers which exhibit behaviors similar to the example
above. Experiment with 2 -- looking up elements by value in an array and
a hash


* Introduction -- Ruby's Benchmark library
* How do we find a value in an array? In a Hash?


* Open an IRB session and define 2 methods in it. We'll use these to
   generate sample data for our examination:

```ruby
def array_of_length(n)
  (1..n).to_a
end

def hash_of_length(n)
  Hash[(1..n).zip((1..n).map(&:to_s))]
end
```


* Create a hash of length 10 and an array of length 10 and experiment
   with finding different elements. Use benchmark to measure the outputs
   of your results:

```
h = hash_of_length(10)
a = array_of_length(10)
Benchmark.measure { h[10] }.to_s
Benchmark.measure { a.find { |i| i == 10 } }.to_s
```
* These results are likely too small to make meaningful inferences
   from. Try some larger examples, using lengths of `100`, `1000`,
   `10,000`, `100,000`, and `1,000,000`. In each example find the last
   element of the list, and make note of the times you observe.
      
      
      
         



### Analyzing Order of Growth

* Let's Plot the results in a graph. The x axis is the length of hash and array and the y is the time.
* The order of growth for hashes vs arrays 
* constant o(1) vs linear (N)


### Popular Algorithms: Bubble Sort

```
class Array
def bubblesort!
length.times do |j| # iterates over the dataset
for i in 1...(length - j) # nested iteration
if self[i] < self[i - 1]
self[i], self[i - 1] = self[i - 1], self[i]
end
end
end
self
end
end
```
* Let's look at the sort with array of length 2,3,4,5
* For each array of length N we are running two loops each run for N times.
* N * N = N squared => The complexity of this algorithm