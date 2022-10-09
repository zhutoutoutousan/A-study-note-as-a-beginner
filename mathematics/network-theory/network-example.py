# Visualize: https://www.geeksforgeeks.org/visualize-graphs-in-python/
import random
import matplotlib.pyplot as plt
# A network is, in its simplest form a graph, a collection of nodes and edges.

# Create a network
def create_network(n, m):
    """
    Create a network with n nodes and m edges.
    """
    network = {}
    for node in range(n):
        network[node] = []
    # define random edges
    for edge in range(m):
        node1 = random.randint(0, n-1)
        node2 = random.randint(0, n-1)
        network[node1].append(node2)
        network[node2].append(node1)



    return network

# Draw the network in the console
def draw_network(network):
    """
    Draw the network in the console.
    """
    for node in network:
        print(node, ":", network[node])

# Driver code
if __name__ == "__main__":
    # User input
    print("Enter the number of nodes:")
    n = int(input())
    print("Enter the number of edges:")
    m = int(input())
    network = create_network(n, m)
    draw_network(network)

