# Import
import math
import sys

def majority(labels):
    # labels is a list of labels
    # returns the most common label
    # assumes that labels is not empty
    return max(set(labels), key=labels.count)

def distance(a, b):
    # a and b are lists of numbers
    # returns the euclidean distance between a and b
    # If string input is given, convert them to numbers and throw warning
    if isinstance(a[0], str):
        print('Warning: string input detected, converting to numbers')
        a = [float(x) for x in a]
        b = [float(x) for x in b]
        return math.sqrt(sum([(x - y) ** 2 for x, y in zip(a, b)]))
    return math.sqrt(sum([(a[i] - b[i]) ** 2 for i in range(len(a))]))

def kNN(train, test, k):
    # train is a list of tuples (label, data)
    # test is a list of tuples (label, data)
    # k is the number of nearest neighbors
    # returns a list of tuples (label, data)
    # where label is the predicted label for the test data
    # and data is the test data itself
    
    # TODO: implement k-NN algorithm
    size = len(train)
    for i in range(size):
        train[i] = (train[i][0], train[i][1], distance(train[i][1], test[1]))
    train.sort(key=lambda x: x[2])
    labels = []
    for i in range(k):
        labels.append(train[i][0])
    labels = list(set(labels))
    if len(labels) == 1:
        return [(labels[0], test[1])]
    else:
        return [(majority(labels), test[1])]

# Generate Data to local file
def generate_data(filename, num_points, num_features):
    # filename is the name of the file to write to
    # num_points is the number of points to generate
    # num_features is the number of features for each point
    # returns nothing
    with open(filename, 'w') as f:
        for i in range(num_points):
            f.write('%d' % i)
            for j in range(num_features):
                f.write(',%d' % (i + j))
            f.write('\n')
    

# Driver code
if __name__ == "__main__":
    # If user input is not correct, ask user if they want to generate data, if not print usage, and exit
    if len(sys.argv) != 4:
        print('Do you want to generate data? (y/n)')
        print('Usage: python3 knn.py <train_file> <test_file> <k>')
        if input() == 'y':
            pass
        else:
            print('Usage: knn.py <train_file> <test_file> <k>')
            print("Usage: python3 knn.py [train_file] [test_file] [k]")
            print("\t[train_file] is the file to read training data from")
            print("\t[test_file] is the file to read test data from")
            print("\t[k] is the number of nearest neighbors to use")
            print("\n\tExample: python3 knn.py train.txt test.txt 3")
            print("\tThis will read train.txt and test.txt and use 3 nearest neighbors to predict labels")
            print("\n\tIf you would like to generate data, please run the following command:")
            print("\tpython3 knn.py [num_points] [num_features]")
            print("\t[num_points] is the number of points to generate")
            print("\t[num_features] is the number of features for each point")
            print("\n\tExample: python3 knn.py 1000 10")
            print("\tThis will generate 1000 points with 10 features each")
            sys.exit()
    # If user input is correct, check if user wants to generate data

    # Generate empty files first, if file doens't exist, create them 
    train_file = open('train.txt', 'w')
    test_file = open('test.txt', 'w')
    # Ask user for genearating data parameters
    print('Specify your data parameters:')
    print('Number of points:')
    num_points = int(input())
    print('Number of features:')
    num_features = int(input())
    # Generate data
    generate_data('train.txt', num_points, num_features)
    generate_data('test.txt', num_points, num_features)

    # Read data
    train = []
    test = []
    with open('train.txt', 'r') as f:
        for line in f:
            line = line.strip().split(',')
            train.append((line[0], line[1:]))
    with open('test.txt', 'r') as f:
        for line in f:
            line = line.strip().split(',')
            test.append((line[0], line[1:]))
    # Run kNN
    for k in range(1, 11):
        print("k = %d" % k)
        correct = 0
        for i in range(len(test)):
            predicted = kNN(train, test[i], k)
            if predicted[0][0] == test[i][0]:
                correct += 1
        print("Accuracy: %.2f%%" % (100 * correct / len(test)))
    # Clean up
    import os
    os.remove(train_file)
    os.remove(test_file)
    print("Done")



    