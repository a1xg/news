from apscheduler.schedulers.background import BackgroundScheduler
from .tasks import reset_votes_for_news


def start():
    """
    The task will be executed at the interval specified in the function.
    """
    scheduler = BackgroundScheduler(timezone="Europe/Vilnius")
    scheduler.add_job(reset_votes_for_news, 'interval', hours=24)
    scheduler.start()
