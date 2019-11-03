class: center, middle

![Python](images/python-logo.svg)

# Python New Features

### Mohammad Javad Naderi

<br/>

Quera

October 2019



---

layout: true
## `dict` Preserves Order (3.7)
<!--------------------------------------------------------------------------------------------------------------------->

---

In Python **3.6**, this was not part of the language (was an implementation detail).

In Python **3.7**, the insertion-order preservation nature of `dict` objects has been
declared to be an **official** part of the Python language spec.



---

layout: true
## f-string (3.6)
<!--------------------------------------------------------------------------------------------------------------------->

---

Formatted string literal

```python
name = "Fred"
print(f"He said his name is {name}.")

width = 10
precision = 4
value = decimal.Decimal("12.34567")
print(f"result: {value:{width}.{precision}}")  # nested fields
```

```
He said his name is Fred.
result:      12.35
```

---

New `=` specifier  in **3.8** for debugging:

```python
user = 'mjnaderi'
member_since = date(1975, 7, 31)
print(f'{user=} {member_since=}')

from math import sin, radians
theta = 30
print(f'{theta=}  {sin(radians(theta))=:.3f}')
```

```
user='mjnaderi' member_since=datetime.date(1975, 7, 31)
theta=30  sin(radians(theta))=0.500
```



---

layout: true
## Walrus Operator `:=`  (3.8)
<!--------------------------------------------------------------------------------------------------------------------->

---

![Walrus](images/walrus.jpg)

- Assignment Expression
  - Assigns values to variables as part of a larger expression.
- Walrus: گراز دریایی

---

Print Fibonacci numbers less than 1000

```python
i = 1
while True:
    f = fib(i)
    if f > 1000:
        break
    print(f)
    i += 1
#########################################
i = 1
f = fib(i)
while f < 1000:
    print(f)
    i += 1
    f = fib(i)
#########################################
i = 0
while (f := fib(i := i + 1)) < 1000:
    print(f)
```

---

```python
fp = open('some/file.txt')
while True:
    line = fp.readline()
    if not line:
        break
    process(line)
###############################
fp = open('some/file.txt')
while line := fp.readline():
    process(line)
```

Examples from Python docs:

```python
discount = 0.0
if m := re.search(r'(\d+)% discount', advertisement):
    discount = float(m.group(1)) / 100.0
```

```python
[clean_name.title() for name in names
 if (clean_name := normalize('NFC', name)) in allowed_names]
```



---

layout: true
## Positional-only Parameters  `/` (3.8)
<!--------------------------------------------------------------------------------------------------------------------->

---

Indicate that some function parameters must be specified positionally and cannot be used as keyword arguments

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)
```

- `a`, `b`: positional-only
- `c`, `d`: can be positional or keyword
- `e`, `f`: keyword-only

```python
f(10, 20, 30, d=40, e=50, f=60)       # Valid
f(10, b=20, c=30, d=40, e=50, f=60)   # Invalid
f(10, 20, 30, 40, 50, f=60)           # Invalid
```

---

**Use Cases:**

- Fully emulate behaviors of existing C functions like `pow`:

  ```python
  def pow(x, y, z=None, /):
      # ...
  ```

- Ensure readability of function calls by disallowing kwargs (`len`)

  ```python
  def len(obj, /):
      # ...
  
  len(obj="Hello")  # Invalid. The "obj" keyword argument impairs readability
  ```

- Change parameter name without the risk of breaking client code

  ```python
  def quantiles(dist, /, *, n=4, method='exclusive')
      # ...
  ```

  You can rename `dist` parameter at any time with confident.

---

**Note:** The name of positional-only parameters remain available for use in kwargs

```python
class Counter(dict):
    def __init__(self, iterable=None, /, **kwargs):
        # Note "iterable" is a possible keyword argument
```



---

layout: true
## Built-in `breakpoint()` (3.7)
<!--------------------------------------------------------------------------------------------------------------------->

---

This function drops you into the debugger at the call site.
You can continue execution using `continue` command in pdb.

`breakpoint()` and `continue` are our new friends now!



---

layout: true
## Module `__getattr__` and `__dir__` (3.7)
<!--------------------------------------------------------------------------------------------------------------------->

---

Python 3.7 allows defining `__getattr__()` on modules and will call it whenever a module
attribute is otherwise not found. Defining `__dir__()` on modules is now also allowed.

A typical example of where this may be useful is module attribute deprecation and lazy loading.



---

layout: true
## `_` in Numeric Literals (3.6)
<!--------------------------------------------------------------------------------------------------------------------->

---

```python
# from qlead
close_for = close_for * 60 * 1000

close_for *= 60_000
```

```python
>>> t = datetime.now().timestamp()

>>> print(f'{t:_}')
1_572_030_255.246196

>>> print(f'{t=:_}')
t=1_572_030_255.246196
```



---

layout: true
## Profile as Context Manager (3.8)
<!--------------------------------------------------------------------------------------------------------------------->

---

```python
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

```python
import cProfile

def fib(n):
    if n in [1, 2]:
        return n
    return fib(n-1) + fib(n-2)

with cProfile.Profile() as profiler:
    print(fib(20))

profiler.print_stats()
```

```
10946
         13532 function calls (4 primitive calls) in 0.021 seconds

   Ordered by: standard name

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
  13529/1    0.021    0.000    0.021    0.021 <stdin>:1(fib)
        1    0.000    0.000    0.000    0.000 cProfile.py:133(__exit__)
        1    0.000    0.000    0.000    0.000 {built-in method builtins.print}
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
```



---

layout: true
## `functools.lru_cache` as a Straight Decorator (3.8)
<!--------------------------------------------------------------------------------------------------------------------->

---

`functools.lru_cache()` can now be used as a straight decorator rather than
as a function returning a decorator. Default maxsize is 128.

```python
@lru_cache
def f(x):
    ...

@lru_cache(maxsize=256)
def f(x):
    ...
```

```python
@lru_cache
def fib(n):
    # ...
```

```
10946
         23 function calls (4 primitive calls) in 0.000 seconds

   Ordered by: standard name

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
     20/1    0.000    0.000    0.000    0.000 <stdin>:1(fib)
        1    0.000    0.000    0.000    0.000 cProfile.py:133(__exit__)
        1    0.000    0.000    0.000    0.000 {built-in method builtins.print}
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
```



---

layout: true
## Data Class (3.7)
<!--------------------------------------------------------------------------------------------------------------------->

---

The constructor and other magic methods, such as `__repr__()`, `__eq__()`, and `__hash__()` are generated automatically.

```python
@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0

p = Point(1.5, 2.5)
print(p)   # produces "Point(x=1.5, y=2.5, z=0.0)"
```



---

layout: true
## `typing` module: Support for type hints (3.5)
<!--------------------------------------------------------------------------------------------------------------------->

---

```python
def greeting(name: str) -> str:
    return 'Hello ' + name
```

We need another presentation for `typing` module. I show you some of the latest features in 3.7 and 3.8.

In Python 3.7, as a result of *PEP 560 work*, the import time of `typing` has been reduced by a factor of 7,
and many typing operations are faster.

---

**typing.TypedDict** (3.8)

```python
class Location(TypedDict, total=False):
    lat_long: tuple
    grid_square: str
    xy_coordinate: tuple
```

**typing.Literal** (3.8)

```python
def get_status(port: int) -> Literal['connected', 'disconnected']:
    ...
```

---

**typing.Final** (3.8)

Indicate to type checkers that a name cannot be re-assigned or overridden in a subclass.

```python
MAX_SIZE: Final = 9000
MAX_SIZE += 1  # Error reported by type checker

class Connection:
    TIMEOUT: Final[int] = 10

class FastConnector(Connection):
    TIMEOUT = 1  # Error reported by type checker
```



---

layout: true
## New Time Functions With Nanosecond Resolution (3.7)
<!--------------------------------------------------------------------------------------------------------------------->

---

The new functions return the number of nanoseconds as an integer value.

- `time.clock_gettime_ns()`
- `time.clock_settime_ns()`
- `time.monotonic_ns()`
- `time.perf_counter_ns()`
- `time.process_time_ns()`
- `time.time_ns()`



---

layout: true
## `secrets` Module
<!--------------------------------------------------------------------------------------------------------------------->

---

Provides an obvious way to reliably generate cryptographically strong pseudo-random values suitable for managing secrets, such as account authentication, tokens, and similar.

`random` module is not appropriate for this.

```python
>>> import secrets

>>> secrets.token_bytes(16)
b'\xebr\x17D*t\xae\xd4\xe3S\xb6\xe2\xebP1\x8b'

>>> secrets.token_hex(16)
'f9bf78b9a18ce6d46a0cd2b0b86df9da'
```



---

layout: true
## Others
<!--------------------------------------------------------------------------------------------------------------------->

---

| Feature                                    | Details / Sample                                             | Python Version |
| -------------------------------------------| ------------------------------------------------------------ | ---- |
| `functools.cached_property` decorator      | Like django's `cached_property`                              | 3.8  |
| New module `multiprocessing.shared_memory` | For the allocation and management of shared memory to be accessed by one or more processes. | 3.8  |
| `pprint.pp()`                              | Like `pprint.pprint` but dict keys are not sorted (prints with the order of insertion) | 3.8  |
| `math.dist((7, 1), (2, 5))`                | Distance between points                                      | 3.8  |
| `math.prod(iterable, *, start = 1)`        | Like `sum`, but calculates product of items                  | 3.8  |
| `math.comb(10, 3)`                         | $C(10, 3)$, $10\choose 3$                                    | 3.8  |
| `math.perm(10, 3)`                         | $P(10, 3)$                                                   | 3.8  |
| `statistics.fmean([3.5, 4, 5.25])`         | float mean<br/>faster than `statistics.mean`                | 3.8  |
| `statistics.geometric_mean()`              | $\sqrt[n]{a_1 a_2 \ldots a_n}$                               | 3.8  |

---

| Feature                                                  | Details / Sample                                             | Python Version |
| -------------------------------------------------------- | ------------------------------------------------------------ | ---- |
| `statistics.multimode('aabbbbccddddeeffffgg')`           | `['b', 'd', 'f']`<br/>Return a list of the most frequently occurring values in the order they were first encountered in the *data*. | 3.8  |
| `statistics.quantiles(data, *, n=4, method='exclusive')` | Divide *data* into *n* continuous intervals with equal probability. Returns a list of `n - 1` cut points separating the intervals. | 3.8  |
| Class `statistics.NormalDist`                            | A tool for creating and manipulating normal distributions    | 3.8  |
| Functions can have more than 255 arguments.              |                                                              | 3.7  |
| Circular imports involving absolute imports with binding a submodule to a name are now supported. | Treat `import a.b.c as m` as `m = sys.modules['a.b.c']`      | 3.7  |
| Local Time Disambiguation                                | `t.fold`  in [0, 1]                                          | 3.7  |
| **kwargs and attributes of classes (in `__dict__`) preserve order |                                                              | 3.7  |



---

layout: false
# References
<!--------------------------------------------------------------------------------------------------------------------->

https://docs.python.org/3/whatsnew/3.6.html

https://docs.python.org/3/whatsnew/3.7.html

https://docs.python.org/3/whatsnew/3.8.html