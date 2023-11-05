const cassandra = require('cassandra-driver');

// Create a connection to the local ScyllaDB cluster
const client = new cassandra.Client({
    contactPoints: ['localhost'], // Use localhost as the contact point
    keyspace: 'todos', // Specify the keyspace you want to use
    localDataCenter: 'datacenter1'
});

// Execute a CQL query
const query = 'SELECT * FROM items';
client.execute(query, (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        client.shutdown();
    } else {
        // Process the query result
        result.rows.forEach(row => {
            console.log(row);
        });
    }
    // Close the client when done
    client.shutdown();
});
