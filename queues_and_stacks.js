/* ==================
QUEUES
=================== */

// Queues are sequential data strucutres. Values emerge and we add them. Like waiting in line at a store, frist value to enter is the first to exist (first customer to wait in line is the first to get their food). For this reason, queues contain only a few methods.

// There are various ways to implement Queues but we'll use a singly linked list:
function Node(value) {
  this.val = value;
  this.next = null;
}

function SLQueue() {
  let head = null;
  let tail = null;
}

// 1. enqueue 
// create a method called enqueue which adds a given value to the end of our queue.
SLQueue.prototype.enqueue = function(value) {
  // capture head node
  let current = this.head;
  // if no head node, then create new node and set to head
  if (!current) {
    this.head = new Node(value);
    // return list
    return this;
  }
  // loop through nodes until end
  while (current.next) {
    current = current.next;
  }
  // create new node and set to next
  current.next = new Node(value);
  // set list tail to new node
  this.tail = current.next;
  // return list
  return this;
};

// test our function, first we create a new queue:
let myQueue = new SLQueue();

// let's test our enqueue method:
myQueue.enqueue(1000);
myQueue.enqueue(900);
myQueue.enqueue(800);
myQueue.enqueue(700);
myQueue.enqueue(600);
myQueue.enqueue(500);
myQueue.enqueue(400);
myQueue.enqueue(300);
myQueue.enqueue(200);
myQueue.enqueue(100);

// it works!

// 2. front
// return the front of a queues's value without removing it
SLQueue.prototype.front = function() {
  // capture head node
  let current = this.head;
  // if no head node return null
  if (!current) {
    console.log("this list contains no head node");
    return null;
  }
  // otherwise return head node value
  console.log(current.val);
  return current.val;
};
// test our method:
myQueue.front();

// 3. isEmpty()
// create a method which returns wehther our queue contains no values
SLQueue.prototype.isEmpty = function() {
  let current = this.head;
  if (!current) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
myQueue.isEmpty();

// 4. Compare queues
// create a function, if given 2 queues, returns whether they are equal
// they are only equal if they have elements in identical order
// don't create any other objects or alter the original queues
SLQueue.prototype.compare = function(q1, q2) {
  // capture head nodes
  let current1 = q1.head,
    current2 = q2.head;
  // if one list has a head node but another does not return false
  if (!current1 && current2 || current1 && !current2) {
    console.log(false);
    return false;
  } 
  // this statement is under the assumption that 2 empty queues are identical
  else if (!current1 && !current2) {
    console.log(true);
    return true;
  }
  // loop through each queue
  while (current1 && current2) {
    if (current1.val === current2.val) {
      current1 = current1.next;
      current2 = current2.next;
    } else {
      console.log(false);
      return false;
    }
  }
  // if one queue still has nodes the list does not match
  if (!current1 && current2 || current1 && !current2) {
    console.log(false);
    return false;
  } 
  // otherwise our queues match
  else {
    console.log(true);
    return true;
  }
};

// let's test this by making a separate queue and comparing to the first queue we made:
let mySecondQueue = new SLQueue(),
  myThirdQueue = new SLQueue();

// let's test our enqueue method:
mySecondQueue.enqueue(1000);
mySecondQueue.enqueue(900);
mySecondQueue.enqueue(800);
mySecondQueue.enqueue(700);
mySecondQueue.enqueue(600);
mySecondQueue.enqueue(500);
mySecondQueue.enqueue(400);
mySecondQueue.enqueue(300);
mySecondQueue.enqueue(200);
mySecondQueue.enqueue(100);

// let's test our enqueue method:
myThirdQueue.enqueue(10000);
myThirdQueue.enqueue(900);
myThirdQueue.enqueue(800);
myThirdQueue.enqueue(700);
myThirdQueue.enqueue(600);
myThirdQueue.enqueue(500);
myThirdQueue.enqueue(400);
myThirdQueue.enqueue(300);
myThirdQueue.enqueue(200);
myThirdQueue.enqueue(100);

myThirdQueue.compare(myQueue, mySecondQueue);
myThirdQueue.compare(myQueue, myThirdQueue);

// 5. Dequeue
// remove and return value at the front of a queue
SLQueue.prototype.dequeue = function() {
  // capture queues' head and tail
  let head = this.head,
    tail = this.tail;

  // if there's no head and no tail, return false as queue is empty
  if (!head && !tail) {
    console.log("this queue has no nodes");
    return false;
  }

  // if there's a head but no tail, set head of queue to empty and return last node
  if (head && !tail) {
    this.head = null;
    return head;
  }

  // if examining second-to-last node, remove queue tail and set the former tail to the new head
  if (!head.next.next) {
    this.head = tail;
    this.tail = null;
    return head;
  }
  this.head = head.next;
  return head;
};

myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();
myThirdQueue.dequeue();

console.log(myThirdQueue);

// 6. Contains
SLQueue.prototype.contains = function(value) {
  // capture head node so we can loop through them
  let current = this.head;
  // if there's no head node, log the queue is empty and return false
  if (!current) {
    console.log("this queue is empty");
    return false;
  }
  // loop through nodes
  while (current) {
    // if value is found return true
    if (current.val === value) {
      console.log(true);
      return true;
    }
    // advance to next node
    current = current.next;
  }
  console.log(false);
  return false;
};
mySecondQueue.contains(840);
mySecondQueue.contains(800);
mySecondQueue.contains(100);
mySecondQueue.contains(5000);

// 7. Size
// return the number of values in the queue
SLQueue.prototype.sizeOf = function() {
  let current = this.head,
    count = 0;
  if (!current) {
    console.log(count);
    return count;
  }
  while (current) {
    count++;
    current = current.next;
  }
  console.log(count);
  return count;
};
mySecondQueue.sizeOf();

// 8. RemoveMin
// remove the queues lowest value and any duplicates of that value, return the modified queue
SLQueue.prototype.removeMin = function() {
  // capture head node and create variable to hold min val set to infinity to start
  let current = this.head,
    min = Infinity;
  
  // if no head node, return false as queue is empty
  if (!current) {
    console.log("this queue is empty");
    return false;
  }

  // loop through nodes updating min if smaller val is found
  while (current) {
    if (current.val < min) {
      min = current.val;
    }
    current = current.next;
  }

  // loop through nodes again this time removing any duplicates
  let previous;
  current = this.head;

  // loop through nodes
  while (current) {
    // if value matches min
    if (current.val === min) {
      // if no previous (match is a head node)
      if (!previous) {
        // set head to our current node's next (removing our matched node from the head)
        this.head = current.next;
      } else {
        // if previous already exists, set it's next to our current node's next (bypassing our matched node)
        previous.next = current.next;
        // if our matched node is a tail node, update our queue
        if (!previous.next) {
          this.tail = previous;
        }
      }
    }
    // advance current node
    previous = current;
    current = current.next;
  }
  return this;
};

mySecondQueue.removeMin();
mySecondQueue.removeMin();
mySecondQueue.removeMin();
mySecondQueue.removeMin();
mySecondQueue.removeMin();
console.log(mySecondQueue);

// 9. Interleave Queue
// interweave the first and second half of a queue
SLQueue.prototype.interleave = function() {
  let current = this.head,
    counter = 1;
  
  if (!current) {
    console.log("this is an empty queue");
    return false;
  }

  let size = this.sizeOf(),
    halfway = Math.round(size / 2),
    biggerHalf = [],
    smallerHalf = [];
  
  while (current) {
    if (counter <= halfway) {
      smallerHalf.push(current);
    }
    if (counter > halfway) {
      biggerHalf.push(current);
    }
    current = current.next;
    counter++;
  }

  let interleaved = new SLQueue(),
    i = 0,
    j = 0,
    smLength = smallerHalf.length,
    bgLength = biggerHalf.length,
    difference;
  
  while (i < smLength && j < bgLength) {
    interleaved.enqueue(smallerHalf[i].val);
    interleaved.enqueue(biggerHalf[j].val);
    i++;
    j++;
  }
  if (smLength > bgLength) {
    difference = smLength - bgLength;
    for (let i = difference; i < smLength; i++) {
      interleaved.enqueue(smallerHalf[i].val);
    }
  }
  if (bgLength > smLength) {
    difference = bgLength - smLength;
    for (let j = difference; j < bgLength; j++) {
      interleaved.enqueue(biggerHalf[i].val);
    }
  }
  console.log(interleaved);
  return interleaved;
};

let myFourthQueue = new SLQueue();

// let's test our enqueue method:
myFourthQueue.enqueue(1);
myFourthQueue.enqueue(2);
myFourthQueue.enqueue(3);
myFourthQueue.enqueue(4);
myFourthQueue.enqueue(5);

myFourthQueue.interleave();
