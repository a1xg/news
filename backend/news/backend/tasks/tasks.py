from ..models import VoteNews


def reset_votes_for_news():
    """
    The task of resetting the vote counter
    """
    VoteNews.objects.all().delete()
