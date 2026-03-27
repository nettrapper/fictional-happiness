from django.core.management.base import BaseCommand
from django.conf import settings
from djongo import connection
from octofit_tracker import models
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        self.stdout.write(self.style.WARNING('Deleting old data...'))
        User = get_user_model()
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        self.stdout.write(self.style.SUCCESS('Creating teams...'))
        marvel = Team.objects.create(name='Team Marvel')
        dc = Team.objects.create(name='Team DC')

        self.stdout.write(self.style.SUCCESS('Creating users...'))
        users = [
            User.objects.create_user(username='ironman', email='ironman@marvel.com', team=marvel),
            User.objects.create_user(username='captainamerica', email='cap@marvel.com', team=marvel),
            User.objects.create_user(username='batman', email='batman@dc.com', team=dc),
            User.objects.create_user(username='superman', email='superman@dc.com', team=dc),
        ]

        self.stdout.write(self.style.SUCCESS('Creating activities...'))
        activities = [
            Activity.objects.create(user=users[0], type='run', duration=30, distance=5),
            Activity.objects.create(user=users[1], type='cycle', duration=45, distance=20),
            Activity.objects.create(user=users[2], type='swim', duration=60, distance=2),
            Activity.objects.create(user=users[3], type='run', duration=25, distance=4),
        ]

        self.stdout.write(self.style.SUCCESS('Creating workouts...'))
        workouts = [
            Workout.objects.create(name='Morning Cardio', description='Cardio for all heroes'),
            Workout.objects.create(name='Strength Training', description='Strength for all heroes'),
        ]

        self.stdout.write(self.style.SUCCESS('Creating leaderboard...'))
        Leaderboard.objects.create(user=users[0], points=100)
        Leaderboard.objects.create(user=users[1], points=90)
        Leaderboard.objects.create(user=users[2], points=110)
        Leaderboard.objects.create(user=users[3], points=95)

        self.stdout.write(self.style.SUCCESS('Ensuring unique index on email field...'))
        db = connection.cursor().db_conn.client[settings.DATABASES['default']['NAME']]
        db.users.create_index('email', unique=True)

        self.stdout.write(self.style.SUCCESS('Database populated with test data!'))
