import psycopg2


def connect(config):
    try:
        return psycopg2.connect(host=config['DATABASE_URL'], dbname=config['DATABASE_NAME'], user=config['DATABASE_USERNAME'], password=config['DATABASE_PASSWORD'])
    except:
        return 'Cannot Connect to database'

def create_database(config):
    try:
        conn = connect(config)
        cur = conn.cursor()
        cur.execute("CREATE TABLE users(ID SERIAL PRIMARY KEY, USERNAME VARCHAR(50) NOT NULL, FIRST_NAME VARCHAR(50), timestamp TIMESTAMPTZ, weight NUMERIC(5,2), workout_duration INT, cardio_type VARCHAR(50), cardio_distance NUMERIC(5,2), bench_press INT, squat INT, dumbbell_curl NUMERIC(5,2), deadlift INT, fly INT, shoulder_press INT, calf_press INT, tricep_press INT);")
        conn.commit()
        cur.close()
        conn.close()
        return 'success'
    except:
        return 'ERROR'

def add_user(config, user):
    try:
        conn = connect(config)
        cur = conn.cursor()
        query = "INSERT INTO users (username) VALUES (%s)"
        data = user.lower()
        cur.execute(query, (data,))
        conn.commit()
        cur.close()
        conn.close()
        return 'User added'
    except:
        'An error has occured'

def user_search(config, user):
    try:
        conn = connect(config)
        cur = conn.cursor()
        query = "SELECT username FROM users WHERE username = %s"
        data = user.lower()
        cur.execute(query, (data,))
        rows = cur.fetchall()
        conn.commit()
        cur.close()
        conn.close()

        if(len(rows) > 0):
            return True
        else:
            return False

    except:
        return 'error'