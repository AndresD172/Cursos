import time

def contador(tiempo):
    for tiempo in reversed(range(tiempo)):
        time.sleep(1)
        print(tiempo)

