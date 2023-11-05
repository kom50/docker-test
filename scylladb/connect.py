from cassandra.cluster import Cluster
from uuid import uuid4  

# Create a connection to your ScyllaDB cluster
cluster = Cluster(['localhost'])

# Establish a session to interact with the cluster
session = cluster.connect('todos')

# Define the table name from which you want to retrieve data
table_name = 'items'

# Execute a CQL query to retrieve all data from the table
query = f'SELECT * FROM {table_name}'
result = session.execute(query)

# Process the query result
for row in result:
    print(row)

# Generate a UUID for the UUID column
uuid_value = uuid4()

# Define the data you want to insert
data = {
    'id': uuid_value,
    'name': 'Todo 5',
    'completed': False,
    # Add more columns and values as needed
}

# Build an INSERT query
query = f"INSERT INTO {table_name} ({', '.join(data.keys())}) VALUES ({', '.join(['%s'] * len(data))})"

# Insert the data into the table
# session.execute(query, list(data.values()))

# Close the session and cluster when done
session.shutdown()
cluster.shutdown()
